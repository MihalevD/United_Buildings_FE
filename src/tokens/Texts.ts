import { ProjectData } from "../config/types";

export const navigation = [
  {name: 'Начало', path: '/'},
  {name: 'Търси имот', path: '/catalog'},
  {name: 'Проекти', path: '/projects'},
  {name: 'За нас', path: '/about-us'},
];


export const keyForDataProjectInfo: ProjectData = {
  size: "Разгъната застроена площ",
  status: "Статус",
  year: "Година на построяване",
  investor: "Инвеститор",
  builder: "Строител",
};
