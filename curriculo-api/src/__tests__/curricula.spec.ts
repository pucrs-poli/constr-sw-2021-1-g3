import { connect, closeDatabase } from '../tests/db-handler';
import { createSkill } from '../controllers/skill';
import { createCurricula, getCurricula } from '../controllers/curricula';

beforeAll(async () => connect());

afterAll(async () => closeDatabase());

describe('curriculas ', () => {
  it('can be created correctly', async () => {
    const skill = await createSkill({
      description: 'Teste4',
      type: 'soft',
    });

    expect(async () =>
      createCurricula({
        name: 'Curricula Teste2',
        skills: [skill.id],
        courses: ['Teste curso'],
      })
    ).not.toThrow();
  });

  it('can list all curricula', async () => {
    const skill = await createSkill({
      description: 'Teste4',
      type: 'soft',
    });

    const curriculum = await createCurricula({
      name: 'Curricula Teste2',
      skills: [skill.id],
      courses: ['Teste curso'],
    });

    const curricula = await getCurricula();

    // eslint-disable-next-line no-underscore-dangle
    expect(curricula.map((value: any) => value.id)).toContain(curriculum.id);
  });
});
