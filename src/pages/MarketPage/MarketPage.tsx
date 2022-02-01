import React from 'react';
import { Helmet } from 'react-helmet';

import AppLayout from '../../components/AppLayout';
import styles from './styles.module.scss';
import { ArrowDownSmallIcon } from '../../icons';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { ControlledSelect } from '../../components/Select/Select';
import { useForm } from 'react-hook-form';

import { Sidebar } from './components/Sidebar';
import { PoolsList } from './components/PoolsList';

const SORT_VALUES = [
  {
    label: (
      <span className={styles.sortName}>
        Name <ArrowDownSmallIcon className={styles.arrowDown} />
      </span>
    ),
    value: 'collectionName_asc',
  },
  {
    label: (
      <span className={styles.sortName}>
        Name <ArrowDownSmallIcon className={styles.arrowUp} />
      </span>
    ),
    value: 'collectionName_desc',
  },
];

const MarketPage = (): JSX.Element => {
  const { control, watch } = useForm({
    defaultValues: {
      sort: SORT_VALUES[0],
    },
  });

  const sort = watch('sort');

  return (
    <AppLayout isLarge className={styles.layout}>
      <div className="container_lg">
        <Helmet>
          <title>{`Market | FRAKT: A NFT-DeFi ecosystem on Solana`}</title>
        </Helmet>
        <div className={styles.wrapper}>
          <Sidebar />

          <div className={styles.content}>
            <h2 className={styles.title}>Buy, sell, and swap NFTs instantly</h2>
            <div className={styles.searchWrapper}>
              <Input
                className={styles.searchInput}
                placeholder="Search pools"
                prefix={<SearchOutlined className={styles.searchIcon} />}
              />
              <div className={styles.sortWrapper}>
                <ControlledSelect
                  className={styles.sortingSelect}
                  valueContainerClassName={styles.sortingSelectValueContainer}
                  label="Sort by"
                  control={control}
                  name="sort"
                  options={SORT_VALUES}
                />
              </div>
            </div>

            <PoolsList />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default MarketPage;
