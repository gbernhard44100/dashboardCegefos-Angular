import { FatnessType } from "src/app/types/imc/FatnessType";

const fatnessAvatarPath = '/assets/images/fatness/avatars/';

export const FatnessData: Array<FatnessType> = [
  {
      size: 'slim',
      frenchDescription: 'maigre',
      maxTresholdIMC: 18.5,
      avatarPath: fatnessAvatarPath + 'slim.PNG'
  },
  {
    size: 'normal',
    frenchDescription: ' de corpulence normale',
    maxTresholdIMC: 25,
    avatarPath: fatnessAvatarPath + 'normal.PNG'
  },
  {
    size: 'overweigth',
    frenchDescription: 'en surpoids',
    maxTresholdIMC: 30,
    avatarPath: fatnessAvatarPath + 'overweight.PNG'
  },
  {
    size: 'obese',
    frenchDescription: 'obèse',
    maxTresholdIMC: 35,
    avatarPath: fatnessAvatarPath + 'obese.PNG'
  }
]