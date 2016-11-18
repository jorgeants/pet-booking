require "cpf_cnpj"

class Professional < ApplicationRecord

	validates :name, :email, presence: true

	validates_numericality_of :crmv, allow_nil: true
	validates :crmv, length: { maximum: 5 }

	validate :charge_xor_register

	validate :cnpj_validate


private

	def charge_xor_register
		unless cnpj.blank? ^ crmv.blank?
			errors.add(:cnpj, "Specify a CNPJ or a CRMV")
			errors.add(:crmv, "Specify a CNPJ or a CRMV")
		end
	end

	def cnpj_validate
		unless CNPJ.valid?(cnpj)
			errors.add(:cnpj, "Invalid CNPJ")
		end
	end

end
