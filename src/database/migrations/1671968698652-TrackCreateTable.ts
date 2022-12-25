import {
  Table, QueryRunner, TableColumn, TableForeignKey, MigrationInterface,
} from 'typeorm';

export class TracksCreateTable1671968898652 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tracks',
        columns: [
          {
            name: 'id',
            type: 'bigint',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'duration',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'quantity_of_listen',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
      true,
    );

    await queryRunner.addColumn(
      'tracks',
      new TableColumn({
        name: 'files_id',
        type: 'bigint',
      }),
    );

    await queryRunner.createForeignKey(
      'tracks',
      new TableForeignKey({
        columnNames: ['files_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'files',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const { foreignKeys } = await queryRunner.getTable('tracks');
    const foreignKey = foreignKeys.find((fk) => fk.columnNames.includes('files_id'));

    await queryRunner.dropForeignKey('tracks', foreignKey);
    await queryRunner.dropColumn('tracks', 'files_id');
    await queryRunner.dropTable('tracks');
  }
}
