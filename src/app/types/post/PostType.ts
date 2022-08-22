export interface PostType {
  title: string,
  content: string,
  loveIts: number,
  created_at: Date
};

export function instanceOfPostType(object: any): object is PostType {
  return true;
}