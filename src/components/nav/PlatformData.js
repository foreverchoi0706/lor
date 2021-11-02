import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
//coponents
import Loading from "../Loading";
//style
import styles from "../../styles/nav/PlatformData.module.scss";
//reducer
import { getPlatformData } from "../../../reducers/navigationReducer";

function PlatformData() {
  const version = useSelector(root => root.ddragonReducer.version);

  const { isLoaded, data } = useSelector(
    (rootReducer) => rootReducer.navigationReducer.platformData,
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlatformData());
  }, [dispatch, getPlatformData]);

  if (!isLoaded) {
    return <Loading />;
  }

  return (
    <div className={styles.PlatformData}>
      {data && (
        <div className={styles.PlatformData_container}>
          <strong>지역 : 아시아</strong>
          <strong>국가 : ko_KR</strong>
          <strong>서버상태 : 🟢</strong>
          <strong>ver.{version}</strong>
        </div>
      )}
    </div>
  );
}

export default memo(PlatformData);
