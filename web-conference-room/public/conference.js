function getBaseUrl() {
  return 'https://web-conference-hse.herokuapp.com/api/';
}

let conferenceEnable = false; 

if (CHECK_STATUS == 'true') {
  document.getElementById("success").style.display = 'block';
} else {
  document.getElementById("failed").style.display = 'block';
}

async function checkPassword() {
  let password = document.getElementById("userPassword").value;

  let roomPassword = {
    room_id: ROOM_ID,
    password: password
  };

  let url = 'room/checkRoomPassword';

  let response = await fetch(new URL(url, getBaseUrl()), { 
    method: 'POST', 
    headers: {'Content-Type': 'application/json;charset=utf-8'},
    body: JSON.stringify(roomPassword)
  });
  let result = await response.json();
  console.log(result);

  let checkPassword = typeof result.statusCode === 'undefined';

  if (checkPassword == true) {
    conferenceEnable = true;
    document.getElementById("success").style.display = 'none';
    document.getElementById("conference").style.display = 'block';
    startConference();
  }
}

function startConference() {
  const socket = io('/')

  const videoGrid = document.getElementById('video-grid')

  const myPeer = new Peer(undefined, {
    secure: true, 
    host: 'web-conference-peer-server.herokuapp.com', 
    port: 443
  })

  const myVideo = document.createElement('video')
  myVideo.muted = true
  const peers = {}

  navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
  }).then(stream => {
    addVideoStream(myVideo, stream)

    myPeer.on('call', call => {
      call.answer(stream)
      const video = document.createElement('video')
      call.on('stream', userVideoStream => {
        addVideoStream(video, userVideoStream)
      })
    })

    socket.on('user-connected', userId => {
      connectToNewUser(userId, stream)
    })
  })

  socket.on('user-disconnected', userId => {
    if (peers[userId]) peers[userId].close()
  })

  myPeer.on('open', id => {
    socket.emit('join-room', ROOM_ID, id)
  })

  function connectToNewUser(userId, stream) {
    const call = myPeer.call(userId, stream)
    const video = document.createElement('video')
    call.on('stream', userVideoStream => {
      addVideoStream(video, userVideoStream)
    })
    call.on('close', () => {
      video.remove()
    })

    peers[userId] = call
  }

  function addVideoStream(video, stream) {
    video.srcObject = stream
    video.addEventListener('loadedmetadata', () => {
      video.play()
    })
    videoGrid.append(video)
  }
}