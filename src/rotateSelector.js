import _ from 'lodash';
export const rotateSelector = state => _.get(state,'rotating', '');
// export const rotatingSelector2 = state => state.rotating