import { IsNotEmpty, IsString } from 'class-validator';

export class CreateOrUpdateJobDto {
  @IsString()
  @IsNotEmpty()
  description: string;
}
