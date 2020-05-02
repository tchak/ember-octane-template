import { helper } from '@ember/component/helper';
import interval from 'human-interval';

export default helper(function duration([i]) {
  return interval(i);
});
