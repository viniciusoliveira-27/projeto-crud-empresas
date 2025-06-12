import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class UpdateEmpresaDto {

    @IsNotEmpty()
    readonly id: string;
    
    @IsString()
    @IsNotEmpty()
    readonly nome: string;

    @IsString()
    cnpj: string;

    @IsString()
    email: string;

    @IsString()
    telefone: string;

    @IsString()
    endereco: string;

    @IsString()
    cidade: string;

    @IsString() 
    estado: string;

    @IsString()
    cep: string;

    @IsString()
    pais: string;

    @IsNotEmpty()
    @IsBoolean()
    status: boolean; // assume que o status é uma string representando um booleano, como "true" ou "false"

    

    // Remove the last invalid decorator usage
}
