
export interface CategoryModel {
  id: number;
  title: string;
}

interface ArticleModel {
  id: number;
  title: string;
  content: string;
  categoryId: number;
  updatedAt:string;
  createdAt:string;
  category:{
    id:number
    title:string
  }
}