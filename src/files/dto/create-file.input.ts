import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import { Field, InputType } from '@nestjs/graphql';
import { FileUpload } from './fileupload.interface';

@InputType()
export class CreateFileInput {
  @Field(() => GraphQLUpload)
  image: Promise<FileUpload>;
}