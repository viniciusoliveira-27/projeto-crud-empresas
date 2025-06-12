import { Module } from '@nestjs/common';
import { EmpresaController } from './controller/empresa.controller';
import { EmpresaService } from './service/empresa.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Empresa, EmpresaSchema } from './schema/empresa.schema';


@Module({
  imports: [MongooseModule.forFeature([
    {name: Empresa.name, schema: EmpresaSchema}
  ])],
  controllers: [EmpresaController],
  providers: [EmpresaService],
  exports: [EmpresaService, MongooseModule]
})
export class EmpresaModule {}
