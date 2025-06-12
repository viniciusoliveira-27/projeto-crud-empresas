import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


export type EmpresaDocument = Empresa & Document;

@Schema({ collection: 'empresas', timestamps: true })
export class Empresa {
    
    @Prop({ required: true })
    nome: string;
    
    @Prop({ required: true, unique: true })
    cnpj: string;
    
    @Prop({ required: true })
    email: string;
    
    @Prop({ required: true })
    telefone: string;

    @Prop({ required: true })
    endereco: string;

    @Prop({ required: true })
    cidade: string;

    @Prop({ required: true })
    estado: string;

    @Prop({ required: true })
    cep: string;

    @Prop({ required: true })
    pais: string;

    @Prop({ default: true })
    status: boolean;

    @Prop({ default: Date.now })
    createdAt?: Date;
    
    @Prop({ default: Date.now })
    updatedAt?: Date;
}
export const EmpresaSchema = SchemaFactory.createForClass(Empresa);

