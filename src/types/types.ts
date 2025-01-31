export interface IPost {
  title: string;
  text: string;
  tags: string;
  autor: string;
  img: string;
  img_2x: string;
  date: string;
  views: string;
}

export interface IPostCardProps {
  post: IPost;
  onClick: () => void;
}

export interface IPostPopupProps {
  post: IPost;
  onClose: () => void;
}
