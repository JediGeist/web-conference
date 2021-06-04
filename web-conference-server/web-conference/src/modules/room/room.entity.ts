import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'room'})
export class Room {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    room_id: string;

    @Column()
    name: string;

    @Column()
    owner_id: string;

    @Column({
        nullable: true
    })
    schedule: Date;

    @Column({
        nullable: true
    })
    info: string;

    @Column({
        nullable: true
    })
    password: string;
}