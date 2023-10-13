import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  //  since we don't have any inputs in the fetcher.Form then there is no need to read any data from request and we just need params to get access to the id of the order

  const data = { priority: true };

  await updateOrder(params.orderId, data);
  return null;
}
