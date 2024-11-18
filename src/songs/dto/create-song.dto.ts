import { IsNotEmpty, Min } from "class-validator"

export class CreateSongDto {
  @IsNotEmpty()
  title: string
  @IsNotEmpty()
  author: string
  @IsNotEmpty()
  @Min(0)
  length: number
  @IsNotEmpty()
  @Min(0) 
  price: number
}
