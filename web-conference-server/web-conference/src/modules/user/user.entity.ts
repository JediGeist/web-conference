import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'user'})
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    user_id: string;

    @Column()
    login: string;

    @Column()
    password: string;

    @Column()
    name: string;

    @Column()
    email: string;
}