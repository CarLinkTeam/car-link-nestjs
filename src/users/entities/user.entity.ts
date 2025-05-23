import { Exclude } from "class-transformer";
import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', {
        unique: true
    })
    email: string;

    @Column('text')
    @Exclude()
    password?: string;

    @Column('text')
    fullName: string;

    @Column('text') 
    location: string;

    @Column('text')
    phone: string;
    
    @Column('bool', { default: true })
    isActive: boolean;

    @Column('text', {
        array: true,
        default: ['TENANT']
    })
    roles: string[];

    @BeforeInsert()
    checkFieldsBeforeInsert() {
        this.email = this.email.toLowerCase().trim();
    }

    @BeforeUpdate()
    checkFieldsBeforeUpdate() {
        this.checkFieldsBeforeInsert();
    }
}