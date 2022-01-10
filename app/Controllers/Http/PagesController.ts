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

  public async thinkTank({ view }: HttpContextContract) {
    return view.render('think-tank');
  }

  public async network({ view }: HttpContextContract) {
    return view.render('network');
  }

  public async platform({ view }: HttpContextContract) {
    return view.render('platform');
  }
}
