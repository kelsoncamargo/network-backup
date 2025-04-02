const execution = new Map<string, any>([
  [
    "backup",
    new Map<string, any>([
      [
        "VSOL-V1600G1-B",
        (equipment: string, username: string, password: string) => {
          return [
            `${username}\n`,
            `${password}\n`,
            `enable\n`,
            `${password}\n`,
            `configure terminal\n`,
            `debug mode\n`,
            `upload ftp configuration ${equipment} 172.50.245.14 equip-sync-backups E2qU5I3psY7ncbA1ckU5ps\n`,
          ];
        },
      ],
    ]),
  ],
]);

const command = new Map<string, any>([
  ["execution", execution],
]);

const getCommand = command.get('execution')?.get('backup')?.get('VSOL-V1600G1-B');

if (getCommand) {
  const commands = getCommand("backup-file", "admin", "senha123");
  console.log(commands);
} else {
  console.log("❌ Dispositivo não suportado.");
}