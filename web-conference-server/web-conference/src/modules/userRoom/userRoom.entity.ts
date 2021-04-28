import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'userRoom'})
export class UserRoom {
    @PrimaryGeneratedColumn()
    id: string;
    
    @Column()
    room_id: string;

    @Column()
    user_id: string;

    @Column()
    user_role: string;
}