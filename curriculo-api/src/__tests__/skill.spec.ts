import { connect, closeDatabase } from '../tests/db-handler';
import { createSkill, getSkill } from '../controllers/skill';

beforeAll(async () => connect());

afterAll(async () => closeDatabase());

describe('skills ', () => {
  it('can be created correctly', async () => {
    expect(async () =>
      createSkill({
        description: 'Teste4',
        type: 'soft',
      })
    ).not.toThrow();
  });

  it('can list all skills', async () => {
    const skill = await createSkill({
      description: 'Teste4',
      type: 'soft',
    });

    const skills = await getSkill();

    expect(skills.map((value: any) => value.id)).toContain(skill.id);
  });
});
