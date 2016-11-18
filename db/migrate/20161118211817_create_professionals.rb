class CreateProfessionals < ActiveRecord::Migration[5.0]
  def change
    create_table :professionals do |t|
      t.string :name
      t.string :email
      t.string :telephone
      t.string :cnpj
      t.integer :crmv

      t.timestamps
    end
  end
end
