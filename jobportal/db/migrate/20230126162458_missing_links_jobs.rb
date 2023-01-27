class MissingLinksJobs < ActiveRecord::Migration[7.0]
  def change
    add_column:jobs,:user_id,:integer,foriegn_key: true
    add_column:jobs,:job_id,:integer,foriegn_key: true
  end
end
