import TxList from "../TxList";

export function TxsLogger() {
const [txs, setTxs] = useState([]);

erc20.on("Transfer", (from, to, amount, event) => {
    console.log({ from, to, amount, event });

    setTxs((currentTxs) => [
      ...currentTxs,
      {
        txHash: event.transactionHash,
        from,
        to,
        amount: String(amount)
      }
    ]);
  });
}