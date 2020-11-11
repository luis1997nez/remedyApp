export interface Tip {
      id?: any,
      titulo: string,
      subtitulo?: string,
      ingredientes: string,
      cuerpo: string,
      urlToImage: string,
      likes?: Number,
      dislikes?: Number,
      fecha?: string,
      hora?: string,
      categoria:string,
      aprobado?: boolean,
      usuario?: string
}
