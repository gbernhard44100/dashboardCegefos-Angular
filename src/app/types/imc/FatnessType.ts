export interface FatnessType {
    size: String,
    frenchDescription: String,
    maxTresholdIMC: Number,
    avatarPath: String
};

export function instanceOfFatnessType(object: any): object is FatnessType {
    return true;
  }