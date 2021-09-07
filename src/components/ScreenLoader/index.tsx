import React, { FC } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import './styles.scss';

export interface ScreenLoaderProps {}

/**
 * Screen loader
 *
 * @returns {JSX}
 */
const ScreenLoader: FC<ScreenLoaderProps> = () => {
  return (
    <div className="screen-loader">
      <CircularProgress />
    </div>
  );
};

export default ScreenLoader;
