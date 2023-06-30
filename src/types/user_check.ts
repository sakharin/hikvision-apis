export interface userCheck {
  userCheck: {
    statusValue: 200 | 400;
    statusString: 'OK' | 'Unauthorized';
    isDefaultPassword?: boolean;
    isRiskPassword?: boolean;
    isActivated?: boolean;
  };
}
