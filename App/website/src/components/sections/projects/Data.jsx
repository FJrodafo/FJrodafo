import DiscordBotLight from '../../../assets/images/app/discordbot/light.png';
import DiscordBotDark from '../../../assets/images/app/discordbot/dark.png';
import DauntlessBuilderLight from '../../../assets/images/contribution/dauntlessbuilder/light.png';
import DauntlessBuilderDark from '../../../assets/images/contribution/dauntlessbuilder/dark.png';
import NPMLight from '../../../assets/images/package/npm/light.png';
import NPMDark from '../../../assets/images/package/npm/dark.png';

const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'app',
  },
  {
    name: 'collaboration',
  },
  {
    name: 'package',
  }
];

const projectsData = [
  {
    id: 1,
    category: 'app',
    imageLight: DiscordBotLight,
    imageDark: DiscordBotDark,
    title: 'DiscordBOT',
    link: 'https://discord.com/users/1206062290697195532',
    repository: 'https://github.com/FJrodafo/DiscordBOT',
  },
  {
    id: 2,
    category: 'collaboration',
    imageLight: DauntlessBuilderLight,
    imageDark: DauntlessBuilderDark,
    link: 'https://www.dauntless-builder.com/',
    title: 'dauntless-builder',
    repository: 'https://github.com/atomicptr/dauntless-builder',
  },
  {
    id: 3,
    category: 'package',
    imageLight: NPMLight,
    imageDark: NPMDark,
    link: 'https://www.npmjs.com/package/@fjrodafo/free-port',
    title: 'free-port',
    repository: 'https://github.com/FJrodafo/free-port',
  },
  {
    id: 4,
    category: 'package',
    imageLight: NPMLight,
    imageDark: NPMDark,
    link: 'https://www.npmjs.com/package/@fjrodafo/colors',
    title: 'colors',
    repository: 'https://github.com/FJrodafo/colors',
  },
];

export { projectsNav, projectsData };
