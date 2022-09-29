export const enum Locale {
  ZH = 'zh',
  EN = 'en',
}

export const enum ActionType {
  Undo = 'undo',
  Redo = 'redo',
  Flip = 'flip',
  Code = 'code',
}

export enum Gender {
  Male = 'male',
  Female = 'female',
  NotSet = 'notSet',
}

export enum WidgetType {
  Face = 'face',
  Tops = 'tops',
  Ear = 'ear',
  Earrings = 'earrings',
  Eyebrows = 'eyebrows',
  Eyes = 'eyes',
  Nose = 'nose',
  Glasses = 'glasses',
  Mouth = 'mouth',
  Beard = 'beard',
  Clothes = 'clothes',
}

export enum WrapperShape {
  Circle = 'circle',
  Square = 'square',
  Squircle = 'squircle',
}

/**
 * WidgetShape
 *
 * All enumeration values of `WidgetShape` correspond to the file name.
 */

export enum FaceShape {
  Base = 'base',
}

export enum TopsShape {
  Bun = 'bun',
  Lowtail = 'lowtail',
  Short = 'short',
  Bob = 'bob',
  Hightail = 'hightail',
  Braid = 'braid',
  Longcurly = 'longcurly',
  Longstraight = 'longstaight',
}

export enum EarShape {
  Attached = 'attached',
  Detached = 'detached',
}

export enum EarringsShape {
  Hoop = 'hoop',
  Stud = 'stud',
  None = 'none',
}

export enum EyebrowsShape {
  Up = 'up',
  Down = 'down',
  Eyelashesup = 'eyelashesup',
  Eyelashesdown = 'eyelashesdown',
}

export enum EyesShape {
  Ellipse = 'ellipse',
  Smiling = 'smiling',
  Eyeshadow = 'eyeshadow',
  Round = 'round',
}

export enum NoseShape {
  Curve = 'curve',
  Round = 'round',
  Pointed = 'pointed',
}

export enum MouthShape {
  Frown = 'frown',
  Laughing = 'laughing',
  Nervous = 'nervous',
  Pucker = 'pucker',
  Sad = 'sad',
  Smile = 'smile',
  Smirk = 'smirk',
  Surprised = 'surprised',
}

export enum BeardShape {
  Scruff = 'scruff',
  None = 'none',
}

export enum GlassesShape {
  Round = 'round',
  Square = 'square',
  None = 'none',
}

export enum ClothesShape {
  Suntop = 'suntop',
}

export type WidgetShape =
  | FaceShape
  | TopsShape
  | EarShape
  | EarringsShape
  | EyebrowsShape
  | EyesShape
  | NoseShape
  | MouthShape
  | BeardShape
  | GlassesShape
  | ClothesShape
