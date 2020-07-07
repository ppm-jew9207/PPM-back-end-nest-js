// TODO: Icons using like:
// https://fontawesome.com/icons?d=gallery
// <Icon className={item.icon} />
// <Icon className={RouterMenuIcons.MENTOR} color="primary" />
// <Icon className={RouterMenuIcons.MENTOR} color="secondary" />
// <Icon className={RouterMenuIcons.MENTOR} style={{ color: green[500] }} />
// <Icon className={RouterMenuIcons.MENTOR} fontSize="small" />
// <Icon className={RouterMenuIcons.MENTOR} style={{ fontSize: 30 }} />
export enum RouterMenuIcons {
  MENTOR = 'fas fa-user-tie',
}

export interface RouterItem {
  path: string;
  title: string;
  icon: string;
  component: any;
  onMenu: boolean;
}
