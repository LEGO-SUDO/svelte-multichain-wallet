import { ethers } from "ethers"
import * as bip39 from "bip39"
import { Keypair } from "@solana/web3.js"
import { PrivateKey } from "@injectivelabs/sdk-ts"
import TonWeb from "tonweb"
// import * as bitcoin from "bitcoin-address-generator"
// import { Keypair as KaspaKeypair } from "@kaspa/core-lib"

export interface WalletInfo {
  mnemonic: string
  // bitcoin: string
  ethereum: string
  solana: string
  injective: string
  // ton: string
  // kaspa: string
}

export async function generateWallets(): Promise<WalletInfo> {
  // Generate a mnemonic
  const mnemonic = bip39.generateMnemonic()

  // Ethere
  const ethWallet = ethers.Wallet.fromPhrase(mnemonic)

  // Bitcoin
  // const bitcoinAddress = await bitcoin.generateAddress(mnemonic)

  // Solana
  const seed = await bip39.mnemonicToSeed(mnemonic)
  const solanaKeypair = Keypair.fromSeed(seed.slice(0, 32))

  // Injective
  const injectivePrivateKey = PrivateKey.fromMnemonic(mnemonic)
  const injectiveAddress = injectivePrivateKey.toAddress().toBech32()

  // TON
  // const tonWallet = await TonWeb.mnemonic.mnemonicToKeyPair(mnemonic.split(" "))
  // const tonAddress = new TonWeb.utils.Address(
  //   TonWeb.Contract.getAddressFromPublicKey(tonWallet.publicKey)
  // ).toString(true, true, true)

  // Kaspa
  // const kaspaKeypair = KaspaKeypair.fromMnemonic(mnemonic)
  // const kaspaAddress = kaspaKeypair.toAddress()

  return {
    mnemonic,
    // bitcoin: bitcoinAddress,
    ethereum: ethWallet.address,
    solana: solanaKeypair.publicKey.toString(),
    injective: injectiveAddress,
    // ton: tonAddress,
    // kaspa: kaspaAddress,
  }
}
