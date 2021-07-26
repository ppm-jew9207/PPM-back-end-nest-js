import React, { SyntheticEvent, useEffect, useState } from 'react';
import { SharedLeftSideMenu } from '@ppm/shared/left-side-menu';
import { SharedFooter } from '@ppm/shared/footer';
import { SharedNavigation } from '@ppm/shared/navigation';
import './features-private-layout.scss';
import { RouterItem } from '@ppm/common/main';
import { createBrowserHistory } from 'history';
import { useSelector, useDispatch } from 'react-redux';
import {
  userProfileSelectors,
  userProfileActions,
} from '@ppm/data-access/user-profile';
import { createStructuredSelector } from 'reselect';

const testMenu = {
  column1: {
    allMenu: [
      { tittle: 'Github', path: '#' },
      { tittle: 'Twitter', path: '#' },
      { tittle: 'StackOverflow', path: '#' },
      { tittle: 'Team', path: '#' },
    ],
    title: 'Community',
  },
  column2: {
    allMenu: [
      { tittle: 'Support', path: '#' },
      { tittle: 'Blog', path: '#' },
      { tittle: 'Material Icons', path: '#' },
    ],
    title: 'Resources',
  },
  column3: {
    allMenu: [
      { tittle: 'About', path: '#' },
      { tittle: 'Contact Us', path: '#' },
      { tittle: 'Jobs', path: '#' },
    ],
    title: 'Company',
  },
  home: 'PPM',
};
const testdata = [
  {
    _id: '',
    title: 'Title',
    path: '',
    timeStamp: '',
    isRead: true,
  },
];

const buttons = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: 'dashboard',
    onClick: () => null,
  },

  {
    label: 'Categories',
    path: '/categories',
    icon: 'list',
    onClick: () => null,
  },
  {
    label: 'My learning',
    path: '/my-learning',
    icon: 'bookmark',
    onClick: () => null,
  },
];
export interface FeaturesPrivateLayoutProps {
  children: React.ReactNode;
  router: RouterItem[];
}

export const FeaturesPrivateLayout = (props: FeaturesPrivateLayoutProps) => {
  const [menuItems, setMenuItems] = useState<
    { name: string; path: string; icon: string }[]
  >();
  const history = createBrowserHistory({ forceRefresh: true });
  const stateSelector = createStructuredSelector({
    profile: userProfileSelectors.selectUserProfile(),
    loading: userProfileSelectors.selectLoading(),
  });

  const dispatch = useDispatch();
  const { profile, loading } = useSelector(stateSelector);
  useEffect(() => {
    dispatch(userProfileActions.getUserProfile());
  }, []);

  useEffect(() => {
    const menu = props.router
      .map((route) => {
        if (route.onMenu) {
          return { name: route.title, path: route.path, icon: route.icon };
        }
        return null;
      })
      .filter((val) => val);
    setMenuItems(menu);

    return () => {
      setMenuItems(null);
    };
  }, [props.router]);

  return (
    <div className="features-private-layout">
      <SharedLeftSideMenu title="" menuItemsArray={menuItems} />
      <SharedNavigation
        isLoading={loading}
        userImage={profile}
        buttons={buttons}
        onSearch={(q: string) => {
          history.push(`/courses?q=${q}`);
        }}
      />
      <div className="content">{props.children}</div>
      <SharedFooter {...testMenu} />
    </div>
  );
};

export default FeaturesPrivateLayout;
