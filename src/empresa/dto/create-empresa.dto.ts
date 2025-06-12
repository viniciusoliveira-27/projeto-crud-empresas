import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateEmpresaDto {
    
    @IsString()
    @IsNotEmpty()
    readonly nome: string;

    @IsNotEmpty()
    @IsString()
    cnpj: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    telefone: string;

    @IsNotEmpty()
    @IsString()
    endereco: string;

    @IsNotEmpty()
    @IsString()
    cidade: string;

    @IsNotEmpty()
    @IsString() 
    estado: string;

    @IsNotEmpty()
    @IsString()
    cep: string;

    @IsNotEmpty()
    @IsString()
    pais: string;

    @IsNotEmpty()
    @IsBoolean() 
    status: boolean; // assume que o status é uma string representando um booleano, como "true" ou "false"

    

}
