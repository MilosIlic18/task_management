import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ItemsEntity } from "../items/items.entity";


@Entity({name:'users'})
export class UsersEntity{
    @PrimaryGeneratedColumn({name:'users_id',type:'int',unsigned:true})
    usersId:number
    @Column({type:'varchar',length:130,nullable:false})
    firstname:string
    @Column({type:'varchar',length:130,nullable:false})
    lastname:string
    @Column({type:'varchar',length:130,unique:true,nullable:false})
    username:string
    @Column({name:'password_hash',type:'varchar',length:128,nullable:false})
    password:string
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(()=>ItemsEntity,item=>item.usersId)
    items:ItemsEntity[]
}