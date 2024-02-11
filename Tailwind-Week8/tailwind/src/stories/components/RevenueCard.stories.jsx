import {  RevenueCard } from '../../components/RevenueCard';

export default {
  component: RevenueCard,
};

export const Primary = {
  render: () => <RevenueCard primary label="Revenue Card" />,
};

//testing
// export const BigAmount/SmallAmount={
//     args: {
//         orderCount:"123"
//         ...
//     }
// }