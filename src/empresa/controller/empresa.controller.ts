import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode, Put } from '@nestjs/common';
import { CreateEmpresaDto } from '../dto/create-empresa.dto';
import { UpdateEmpresaDto } from '../dto/update-empresa.dto';
import { EmpresaService } from '../service/empresa.service';
import { Empresa } from '../schema/empresa.schema';


@Controller('empresa')
export class EmpresaController {

  constructor(
    private readonly empresaService: EmpresaService
  ) { }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Empresa[]> {
    return this.empresaService.findAll();
  }

  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  findOne(@Param('id') id: string): Promise<Empresa> {
    return this.empresaService.findOne(id);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/empresa/:nome')
  findByName(@Param('nome') nome: string) : Promise<Empresa[]> {
    return this.empresaService.findByName(nome);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() dto: CreateEmpresaDto): Promise<Empresa> {
    return this.empresaService.create(dto);
  }

  @Put()
  update(@Body() id: string, dto: UpdateEmpresaDto): Promise<Empresa> {
    return this.empresaService.update(id, dto);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string) {
    return this.empresaService.delete(id);
  }
}
