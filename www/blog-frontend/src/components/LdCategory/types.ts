export interface LdCategory {
  id: number;
  category_id: number;
  category_name: string;
  category_cover: string;
  category_url: string;
  category_describe: string;
  category_color: string;
}

export type LdCategoryList = Array<LdCategory>