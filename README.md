<h1> All Things Web3  </h1>

<p align="center">
  <img src="https://img.shields.io/github/stars/DavidCisar/web3?style=social" />
  <img src="https://img.shields.io/github/license/DavidCisar/web3" />
  <img src="https://img.shields.io/github/package-json/v/DavidCisar/web3" />
  <img src="https://github.com/DavidCisar/web3/actions/workflows/pr-checks.yml/badge.svg" />
  <img src="https://img.shields.io/github/issues/DavidCisar/web3" />
  <img src="https://img.shields.io/github/issues-pr/DavidCisar/web3" />
</p>

---

## 🧠 About

This repository is a **modular, comprehensive knowledge base and resource hub for modern Web3 development** — covering everything from frontend dApp frameworks to smart contract security, zero-knowledge proofs, network orchestration, and more.

The goal is to **consolidate key learnings, tools, and reusable templates** to accelerate the development of decentralized applications and systems, while supporting **community collaboration and open-source contributions**.

---

## 📦 Structure

The repository is organized into self-contained modules:

<p>
web3/ <br>
├── frontend/ # React, Angular, Svelte templates (ethers, wagmi, etc.) <br>
├── networks/ # Public testnets, private localnets (e.g. Hardhat) <br>
├── nodes <br>
├── oracles/ # Chainlink, Band, custom data feeds <br>
├── protocols/ # Staking, Lending, Voting, Token Standards, DEXs <br>
├── research/ # Papers, references, whitepapers, blog links <br>
├── security/ # Static analysis tools, audit tips, reentrancy patterns <br>
├── smart-contracts/ # Solidity, Vyper, Yul, EVM Assembly, deployment <br>
├── tooling <br>
├── wallets <br>
├── zero knowledge <br>
└── changelogs/ # Manual + auto-generated logs for each module <br>
</p>

---

## 🚀 Contribution

We **welcome PRs** across modules! Whether it’s adding a new protocol implementation, sharing research, improving ZK tooling, or fixing a typo — your help makes this resource better for everyone.

### 📌 Contribution Rules:
- ✅ PRs must contain **only one commit** (squash if needed)
- ✅ Commit messages must pass the **linter**
- ✅ Document your additions in the relevant `CHANGELOG.md`
- ✅ Refer to existing module structure before adding new folders

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for style, format, and lint instructions.

---

## 📖 Versioning & Changelogs

This project tracks:
- 🔢 Manual changelogs per module (`/changelogs/MODULE.md`)
- 📦 Central changelog with version map (`/changelogs/VERSIONS.md`)
- 🤖 Optional: Automated changelog from commit metadata (coming soon)

Current version: **`0.0.1-beta`**

---

## 📄 License

This project is open-sourced under the [MIT License](./LICENSE).

---

## 🙌 Acknowledgements

Built by [@DavidCisar](https://github.com/DavidCisar) — inspired by the need for structured, practical, and open knowledge sharing in the Web3 space.

Contributions and forks are welcome — let’s build this ecosystem together.
