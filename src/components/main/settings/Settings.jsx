import React from 'react';
import { 
  Style, 
  Title,
} from './components';
import ClearHistorySection from './section/clearHistorySection/ClearHistorySection';
import ThemeSection from './section/themeSection/ThemeSection';

const Settings = () => {

  const title = 'Settings';

  return (
    <Style>
      <Title>
        { title }
      </Title>
      <ThemeSection />
      <ClearHistorySection />
    </Style>
  );
};

export default Settings;
