module.exports = {
  withdrawalRecipient: {
    evm: "0xYourRecipientEvmWallet",
    solana: "RecipientSolanaAddress",
    tron: "TRecipientTronWallet",
  },
  evm: {
    rpc: "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID",
    privateKey: "YourEvmPrivateKey",
  },
  solana: {
    rpc: "https://api.mainnet-beta.solana.com",
    keypair: "solana-keypair.json",
  },
  tron: {
    rpc: "https://api.trongrid.io",
    privateKey: "YourTronPrivateKey",
  },
  telegramBot: {
    token: "YOUR_TELEGRAM_BOT_TOKEN",
    adminIds: ["123456789", "987654321"], // Provide Telegram Admin IDs
  },
};