import { text } from "body-parser";
import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar"})
    email:string;

    @Column({type:"varchar"})
    password:string;

    @Column({type:"varchar"})
    name:string;

    @Column({type:"text", nullable: true})
    avatar:string;

    @Column({type:"text", nullable: true})
    background:string;

    @Column({type:"varchar", nullable: true})
    gender:string;

    @Column({type:Date, nullable: true})
    birthday:Date
}