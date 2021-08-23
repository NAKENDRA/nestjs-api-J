import { Injectable, Inject } from '@nestjs/common';
const db = require('../../models');
import { QueryTypes } from 'sequelize';

@Injectable()
export class ApiService {
  async findAll(): Promise<any> {
    return await db.sequelize.query(
      `select
      level_name,
      json_agg(json_build_object('subject_name',SUB.subject_name, 'standards',
      standards)) as subjects from public."Subjects" SUB left join 
        (
        select
          json_agg(json_build_object('standard_name',standard_name,'nceaCode', ncea_code)) as standards,
            subject_id
         
        from 
          public."Standards"
        group by
        subject_id
        ) x on x.subject_id= SUB.id group by level_name;`,
      { type: QueryTypes.SELECT },
    );
  }
}
