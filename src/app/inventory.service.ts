import { Injectable } from '@angular/core';

@Injectable()
export class InventoryService {

  public courseItems = [
    {
        "itemId": "5b5417f31c93622d2edda5d4",
        "itemTitle": "Lorem pariatur quis",
        "itemShortDescription": "sint aliqua sint sint sint non cillum sint non est",
        "itemLongDescription": "Dolor fugiat tempor magna sunt. Deserunt nisi ad duis velit irure nulla aliqua. Officia est eiusmod nostrud est adipisicing anim ea nisi commodo excepteur consectetur dolor. Nostrud qui voluptate proident sit aliquip. Nulla veniam deserunt ipsum aliqua reprehenderit aliqua pariatur do commodo incididunt veniam quis nisi. Ullamco eu deserunt sit ea amet tempor duis minim aliquip in esse. Aliqua duis commodo laborum laborum laborum proident laboris duis ad aute adipisicing Lorem.\r\n",
        "itemCost": 100000
    },
    {
        "itemId": "5b5417f349763678998a8d32",
        "itemTitle": "proident consequat enim",
        "itemShortDescription": "quis quis occaecat quis ipsum eu enim veniam labore pariatur",
        "itemLongDescription": "Duis do ad duis sit sunt adipisicing quis culpa sint proident magna irure. Sunt nisi pariatur labore laboris ullamco ad duis tempor elit aute quis commodo et. Sit eu in laboris quis dolor aute ut eiusmod anim exercitation. Incididunt adipisicing reprehenderit mollit sit eiusmod. Excepteur Lorem reprehenderit et laborum do ipsum. Quis nostrud deserunt enim reprehenderit sint tempor aute. Consequat sint anim ad non proident voluptate ad consectetur tempor in est non in.\r\n",
        "itemCost": 100000
    },
    {
        "itemId": "5b5417f3e3ec8ced1bd5f13d",
        "itemTitle": "ipsum incididunt do",
        "itemShortDescription": "elit reprehenderit amet laboris ea sint excepteur Lorem pariatur aliquip",
        "itemLongDescription": "Laborum id do quis enim sunt qui reprehenderit ipsum et do deserunt. Ut exercitation quis do enim culpa. Eu non mollit id deserunt tempor et laboris Lorem adipisicing Lorem quis amet aliquip. Ex voluptate irure excepteur excepteur laboris ut. Ex tempor magna consectetur nisi deserunt est consequat culpa. Sunt duis do ad dolore irure sit amet nostrud reprehenderit sint sunt aliqua.\r\n",
        "itemCost": 100000
    },
    {
        "itemId": "5b5417f374fbc428363737b5",
        "itemTitle": "aliqua excepteur ut",
        "itemShortDescription": "eu et enim reprehenderit excepteur elit deserunt non ad dolore",
        "itemLongDescription": "Excepteur amet tempor voluptate excepteur ullamco enim qui eu voluptate consectetur consectetur voluptate non eu. Quis occaecat ut fugiat eiusmod. Enim Lorem id nisi reprehenderit anim minim sit qui consectetur nisi. Est proident labore elit magna velit in incididunt aliqua. Exercitation sint amet magna elit dolore laboris proident fugiat excepteur.\r\n",
        "itemCost": 100000
    },
    {
        "itemId": "5b5417f3a4fbf64c4aeb089b",
        "itemTitle": "tempor nisi adipisicing",
        "itemShortDescription": "pariatur elit dolor cupidatat aliqua eu enim incididunt excepteur dolore",
        "itemLongDescription": "Pariatur esse enim esse incididunt voluptate quis. Consectetur tempor laboris dolore mollit eu. Laboris enim fugiat pariatur magna irure velit voluptate elit ut in irure. Est dolore anim aliquip quis aliquip commodo aliquip quis et fugiat nulla ad commodo irure. Labore proident veniam ad in velit veniam ad sit enim dolore cillum. Labore pariatur minim irure consectetur minim ex ut qui.\r\n",
        "itemCost": 100000
    },
    {
        "itemId": "5b5417f3b9268e935880db09",
        "itemTitle": "irure do in",
        "itemShortDescription": "deserunt do aute ullamco labore culpa tempor sunt ad tempor",
        "itemLongDescription": "Voluptate ipsum deserunt ex officia. Magna ad ipsum dolore elit dolor irure duis labore magna officia. Excepteur tempor esse tempor elit eiusmod qui sit dolor aute Lorem officia commodo ipsum deserunt. Veniam non adipisicing id exercitation voluptate consequat et nisi commodo pariatur deserunt nisi ad ut. Cupidatat qui sint labore enim veniam esse minim eiusmod laborum.\r\n",
        "itemCost": 100000
    },
    {
        "itemId": "5b5417f389e2c24370cbcf5d",
        "itemTitle": "irure tempor voluptate",
        "itemShortDescription": "quis aliquip esse quis irure laboris eu ex qui duis",
        "itemLongDescription": "Deserunt qui esse Lorem aliqua nisi ad laborum in aliqua. Eu occaecat proident nulla sint fugiat. Ullamco commodo laborum elit dolore eiusmod ea adipisicing dolor. Ipsum fugiat magna laborum amet tempor. Incididunt dolore eiusmod laborum sit officia non anim id esse ipsum qui.\r\n",
        "itemCost": 100000
    },
    {
        "itemId": "5b5417f3819da12d6478eb61",
        "itemTitle": "eu cillum ad",
        "itemShortDescription": "excepteur aliqua voluptate elit voluptate aliquip pariatur incididunt nisi minim",
        "itemLongDescription": "Irure eiusmod magna anim culpa eiusmod irure. Occaecat ea mollit ut duis sint veniam. Enim id do reprehenderit Lorem pariatur est nulla do consectetur nostrud irure.\r\n",
        "itemCost": 100000
    },
    {
        "itemId": "5b5417f323f44643a2de87cc",
        "itemTitle": "in commodo proident",
        "itemShortDescription": "sunt consequat incididunt cillum commodo elit dolore reprehenderit irure nisi",
        "itemLongDescription": "Ipsum magna nostrud est eiusmod consectetur deserunt nostrud nulla sit in aliquip. Fugiat aliqua eu consequat reprehenderit consectetur qui aute. Veniam tempor minim occaecat dolore ad officia. Cupidatat cupidatat officia sunt aliquip voluptate eu sint cupidatat proident officia proident eiusmod velit deserunt.\r\n",
        "itemCost": 100000
    },
    {
        "itemId": "5b5417f3d84992088d011fee",
        "itemTitle": "dolore sunt dolore",
        "itemShortDescription": "velit ut reprehenderit anim qui sint consequat aute nisi exercitation",
        "itemLongDescription": "Veniam dolor culpa sint magna aliqua pariatur. Do labore labore sint eu minim do laboris occaecat sunt commodo dolor voluptate magna eu. Culpa ad commodo aliqua consectetur excepteur minim. Ex consectetur consectetur veniam consectetur ullamco est et eu.\r\n",
        "itemCost": 100000
    },
    {
        "itemId": "5b5417f3046d4850043acaa3",
        "itemTitle": "amet enim proident",
        "itemShortDescription": "mollit sunt eu aliqua incididunt mollit quis id ipsum nulla",
        "itemLongDescription": "Veniam ad in cillum amet ad mollit duis quis et enim anim pariatur. Elit veniam duis mollit id elit Lorem dolore reprehenderit incididunt nulla. Esse nulla et dolore laborum sint irure minim. Exercitation elit magna occaecat elit quis amet pariatur. Nisi laboris ipsum anim exercitation nisi aliqua quis dolor ea.\r\n",
        "itemCost": 100000
    },
    {
        "itemId": "5b5417f32d4526d0f31e45d1",
        "itemTitle": "occaecat dolor dolor",
        "itemShortDescription": "nostrud laboris ut cupidatat cillum aute laborum incididunt cillum duis",
        "itemLongDescription": "Ut culpa esse aute aliquip nostrud quis proident deserunt deserunt nulla veniam. Labore adipisicing fugiat cupidatat excepteur officia aliqua ut sit. Cillum laboris commodo veniam aute reprehenderit officia. Ipsum ex ex mollit dolor.\r\n",
        "itemCost": 100000
    }
  ]
  constructor() { }

  public getCourseItems(){
    return this.courseItems;
  }

  public getCourseItemInfoById(courseId : string){
    let course = {}
    for (let c of this.courseItems){
      if(c.itemId === courseId){
        course = c;
        break;
      }
    }

    return course;
  }

}
