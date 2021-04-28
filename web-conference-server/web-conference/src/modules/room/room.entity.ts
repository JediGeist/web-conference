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
}