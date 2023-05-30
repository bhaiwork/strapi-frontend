export interface ICollectionResponse<T>{
    data:T;
    meta:IResourceMeta;
}
export interface IResourceMeta{
    pagination:IPagination;
}
export interface IPagination{
    page:number;
    pageSize:number;
    pageCount:number;
    total:number;
}
export interface IImageCategoryData{
    data:{
        attributes:{
            formats:{
                thumbnail:{
                    url:string;
                }
            }
        }
    }
}
export interface ICategoryAttribute{
    Title:string;
    Slug:string;
    Image:IImageCategoryData;
}
export interface ICategory{
    id:number;
    attributes:ICategoryAttribute;
}
