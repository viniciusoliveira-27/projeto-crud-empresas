import { InjectModel } from '@nestjs/mongoose';
import { CreateEmpresaDto } from '../dto/create-empresa.dto';
import { UpdateEmpresaDto } from '../dto/update-empresa.dto';
import { Empresa, EmpresaDocument } from '../schema/empresa.schema';
import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class EmpresaService {

  constructor(
    @InjectModel(Empresa.name)
    private empresaModel: Model<EmpresaDocument>
  ) {}

  async findAll(): Promise<Empresa[]> {
    return this.empresaModel.find().exec();
     
  }

  async findOne(id: string): Promise<Empresa> {
    const empresa = await this.empresaModel.findById(id).exec();
    if (!empresa) {
      throw new HttpException(`Empresa não encontrada`, HttpStatus.NOT_FOUND);
    }
    return empresa;
  }

  async findByName(nome: string): Promise<Empresa[]> {
    return await this.empresaModel
      .find({ nome: {$regex: nome, $options: 'i'} })
      .exec();
  }

  async create(dto: CreateEmpresaDto) : Promise<Empresa> {
    const empresa = new this.empresaModel(dto);
    return empresa.save();
  }

  async update(id: string, dto: UpdateEmpresaDto): Promise<Empresa> {
    const empresa = await this.empresaModel.findByIdAndUpdate(id, dto, {new: true}).exec();
    if (!empresa) {
      throw new HttpException('Empresa não encontrada', HttpStatus.NOT_FOUND);
    }
    return empresa;
  }

  async delete(id: string): Promise<void> {
    const result = await this.empresaModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new HttpException('erro ao deletar: Empresa não encontrada', HttpStatus.NOT_FOUND);
    }
  }
}
