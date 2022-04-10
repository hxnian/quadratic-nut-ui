/*!
* mz-taro-ui v1.0.0 Sun Apr 10 2022 17:39:43 GMT+0800 (中国标准时间)
* (c) 2021 @mzui.
* Released under the MIT License.
*/
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
export { _export_sfc as _ };
