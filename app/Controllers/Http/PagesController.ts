import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PagesController {
  public async home({ view }: HttpContextContract) {
    return view.render('home');
  }

  public async readMore({ view }: HttpContextContract) {
    return view.render('read-more');
  }

  public async fundApply({ view }: HttpContextContract) {
    return view.render('fund-apply');
  }

  public async contact({ view }: HttpContextContract) {
    return view.render('contact');
  }
}
